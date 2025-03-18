
const express = require('express')
import {handler6696} from "./handler6696";
const app = express()
app.get('/6696', handler6696)
app.listen(3000, () => {})
        