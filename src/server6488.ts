
const express = require('express')
import {handler6488} from "./handler6488";
const app = express()
app.get('/6488', handler6488)
app.listen(3000, () => {})
        