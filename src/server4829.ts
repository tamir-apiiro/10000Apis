
const express = require('express')
import {handler4829} from "./handler4829";
const app = express()
app.get('/4829', handler4829)
app.listen(3000, () => {})
        