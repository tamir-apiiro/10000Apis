
const express = require('express')
import {handler4598} from "./handler4598";
const app = express()
app.get('/4598', handler4598)
app.listen(3000, () => {})
        