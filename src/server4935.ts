
const express = require('express')
import {handler4935} from "./handler4935";
const app = express()
app.get('/4935', handler4935)
app.listen(3000, () => {})
        