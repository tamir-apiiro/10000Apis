
const express = require('express')
import {handler9345} from "./handler9345";
const app = express()
app.get('/9345', handler9345)
app.listen(3000, () => {})
        