
const express = require('express')
import {handler4485} from "./handler4485";
const app = express()
app.get('/4485', handler4485)
app.listen(3000, () => {})
        