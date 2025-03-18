
const express = require('express')
import {handler6194} from "./handler6194";
const app = express()
app.get('/6194', handler6194)
app.listen(3000, () => {})
        