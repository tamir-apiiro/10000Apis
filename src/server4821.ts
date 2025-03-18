
const express = require('express')
import {handler4821} from "./handler4821";
const app = express()
app.get('/4821', handler4821)
app.listen(3000, () => {})
        