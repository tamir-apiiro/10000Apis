
const express = require('express')
import {handler7352} from "./handler7352";
const app = express()
app.get('/7352', handler7352)
app.listen(3000, () => {})
        