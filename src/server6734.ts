
const express = require('express')
import {handler6734} from "./handler6734";
const app = express()
app.get('/6734', handler6734)
app.listen(3000, () => {})
        