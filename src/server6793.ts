
const express = require('express')
import {handler6793} from "./handler6793";
const app = express()
app.get('/6793', handler6793)
app.listen(3000, () => {})
        