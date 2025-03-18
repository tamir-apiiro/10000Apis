
const express = require('express')
import {handler6968} from "./handler6968";
const app = express()
app.get('/6968', handler6968)
app.listen(3000, () => {})
        