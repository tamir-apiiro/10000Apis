
const express = require('express')
import {handler6744} from "./handler6744";
const app = express()
app.get('/6744', handler6744)
app.listen(3000, () => {})
        