
const express = require('express')
import {handler7580} from "./handler7580";
const app = express()
app.get('/7580', handler7580)
app.listen(3000, () => {})
        