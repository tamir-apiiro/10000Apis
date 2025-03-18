
const express = require('express')
import {handler4952} from "./handler4952";
const app = express()
app.get('/4952', handler4952)
app.listen(3000, () => {})
        