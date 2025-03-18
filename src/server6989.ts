
const express = require('express')
import {handler6989} from "./handler6989";
const app = express()
app.get('/6989', handler6989)
app.listen(3000, () => {})
        