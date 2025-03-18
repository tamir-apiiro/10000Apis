
const express = require('express')
import {handler6137} from "./handler6137";
const app = express()
app.get('/6137', handler6137)
app.listen(3000, () => {})
        