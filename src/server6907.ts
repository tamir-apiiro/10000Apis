
const express = require('express')
import {handler6907} from "./handler6907";
const app = express()
app.get('/6907', handler6907)
app.listen(3000, () => {})
        