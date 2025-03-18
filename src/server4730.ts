
const express = require('express')
import {handler4730} from "./handler4730";
const app = express()
app.get('/4730', handler4730)
app.listen(3000, () => {})
        