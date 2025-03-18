
const express = require('express')
import {handler6786} from "./handler6786";
const app = express()
app.get('/6786', handler6786)
app.listen(3000, () => {})
        