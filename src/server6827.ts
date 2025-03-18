
const express = require('express')
import {handler6827} from "./handler6827";
const app = express()
app.get('/6827', handler6827)
app.listen(3000, () => {})
        