
const express = require('express')
import {handler6151} from "./handler6151";
const app = express()
app.get('/6151', handler6151)
app.listen(3000, () => {})
        