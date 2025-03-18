
const express = require('express')
import {handler6896} from "./handler6896";
const app = express()
app.get('/6896', handler6896)
app.listen(3000, () => {})
        