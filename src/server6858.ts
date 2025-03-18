
const express = require('express')
import {handler6858} from "./handler6858";
const app = express()
app.get('/6858', handler6858)
app.listen(3000, () => {})
        