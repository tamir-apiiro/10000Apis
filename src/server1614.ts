
const express = require('express')
import {handler1614} from "./handler1614";
const app = express()
app.get('/1614', handler1614)
app.listen(3000, () => {})
        