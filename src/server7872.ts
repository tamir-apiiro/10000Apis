
const express = require('express')
import {handler7872} from "./handler7872";
const app = express()
app.get('/7872', handler7872)
app.listen(3000, () => {})
        