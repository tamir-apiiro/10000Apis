
const express = require('express')
import {handler4508} from "./handler4508";
const app = express()
app.get('/4508', handler4508)
app.listen(3000, () => {})
        