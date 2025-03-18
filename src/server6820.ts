
const express = require('express')
import {handler6820} from "./handler6820";
const app = express()
app.get('/6820', handler6820)
app.listen(3000, () => {})
        