
const express = require('express')
import {handler4574} from "./handler4574";
const app = express()
app.get('/4574', handler4574)
app.listen(3000, () => {})
        