import pool from '@/mysql';

// 本地添加数据
export const demo = async () => {
    const checkSql = `
        SELECT * FROM iuu_const
    `;
    try {
        // 执行查询并获取结果
        const [checkResult] = await pool.query(checkSql);

        return {
            code: 200,
            checkResult: checkResult,
            error: '牛逼'
        };

    } catch (error:any) {
        return {
            code: 500,
            error: error.message
        };
    }
};