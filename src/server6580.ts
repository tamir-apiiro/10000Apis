
const express = require('express')
import {handler6580} from "./handler6580";
const app = express()
app.get('/6580', handler6580)
app.listen(3000, () => {})
        