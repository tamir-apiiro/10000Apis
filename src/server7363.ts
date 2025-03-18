
const express = require('express')
import {handler7363} from "./handler7363";
const app = express()
app.get('/7363', handler7363)
app.listen(3000, () => {})
        