
const express = require('express')
import {handler6956} from "./handler6956";
const app = express()
app.get('/6956', handler6956)
app.listen(3000, () => {})
        