
const express = require('express')
import {handler6548} from "./handler6548";
const app = express()
app.get('/6548', handler6548)
app.listen(3000, () => {})
        