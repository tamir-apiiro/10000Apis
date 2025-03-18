
const express = require('express')
import {handler4580} from "./handler4580";
const app = express()
app.get('/4580', handler4580)
app.listen(3000, () => {})
        