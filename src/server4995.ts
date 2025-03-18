
const express = require('express')
import {handler4995} from "./handler4995";
const app = express()
app.get('/4995', handler4995)
app.listen(3000, () => {})
        