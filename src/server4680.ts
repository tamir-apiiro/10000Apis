
const express = require('express')
import {handler4680} from "./handler4680";
const app = express()
app.get('/4680', handler4680)
app.listen(3000, () => {})
        