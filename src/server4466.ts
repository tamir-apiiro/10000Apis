
const express = require('express')
import {handler4466} from "./handler4466";
const app = express()
app.get('/4466', handler4466)
app.listen(3000, () => {})
        