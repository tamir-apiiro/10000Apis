
const express = require('express')
import {handler834} from "./handler834";
const app = express()
app.get('/834', handler834)
app.listen(3000, () => {})
        