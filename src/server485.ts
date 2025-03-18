
const express = require('express')
import {handler485} from "./handler485";
const app = express()
app.get('/485', handler485)
app.listen(3000, () => {})
        