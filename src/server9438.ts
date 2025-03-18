
const express = require('express')
import {handler9438} from "./handler9438";
const app = express()
app.get('/9438', handler9438)
app.listen(3000, () => {})
        