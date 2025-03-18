
const express = require('express')
import {handler2352} from "./handler2352";
const app = express()
app.get('/2352', handler2352)
app.listen(3000, () => {})
        