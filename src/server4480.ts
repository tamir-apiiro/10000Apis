
const express = require('express')
import {handler4480} from "./handler4480";
const app = express()
app.get('/4480', handler4480)
app.listen(3000, () => {})
        