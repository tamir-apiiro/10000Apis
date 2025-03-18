
const express = require('express')
import {handler6468} from "./handler6468";
const app = express()
app.get('/6468', handler6468)
app.listen(3000, () => {})
        