
const express = require('express')
import {handler4021} from "./handler4021";
const app = express()
app.get('/4021', handler4021)
app.listen(3000, () => {})
        