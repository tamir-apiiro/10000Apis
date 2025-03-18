
const express = require('express')
import {handler6556} from "./handler6556";
const app = express()
app.get('/6556', handler6556)
app.listen(3000, () => {})
        