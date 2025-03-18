
const express = require('express')
import {handler4744} from "./handler4744";
const app = express()
app.get('/4744', handler4744)
app.listen(3000, () => {})
        