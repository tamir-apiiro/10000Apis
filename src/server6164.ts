
const express = require('express')
import {handler6164} from "./handler6164";
const app = express()
app.get('/6164', handler6164)
app.listen(3000, () => {})
        