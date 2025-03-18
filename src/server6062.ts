
const express = require('express')
import {handler6062} from "./handler6062";
const app = express()
app.get('/6062', handler6062)
app.listen(3000, () => {})
        