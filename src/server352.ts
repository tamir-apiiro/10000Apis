
const express = require('express')
import {handler352} from "./handler352";
const app = express()
app.get('/352', handler352)
app.listen(3000, () => {})
        