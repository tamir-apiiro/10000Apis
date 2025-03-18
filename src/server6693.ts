
const express = require('express')
import {handler6693} from "./handler6693";
const app = express()
app.get('/6693', handler6693)
app.listen(3000, () => {})
        