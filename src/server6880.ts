
const express = require('express')
import {handler6880} from "./handler6880";
const app = express()
app.get('/6880', handler6880)
app.listen(3000, () => {})
        